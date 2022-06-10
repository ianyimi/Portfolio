import { useMemo } from "react";
import { ShaderMaterial, ShaderMaterialParameters } from "three";

const uniforms = () => ({ uniforms: { time: { value: 0 } } });

export const vert = `
  precision highp float;
  
  uniform float time;
  
  attribute float seed;
  
  #define radiusNoiseFrequency 46.
  #define radiusVariationAmplitude 0.1
  #define radius 0.0001
  
  
  vec3 mod289(vec3 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 mod289(vec4 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 permute(vec4 x) {
         return mod289(((x*34.0)+1.0)*x);
    }
    
    vec4 taylorInvSqrt(vec4 r)
    {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    
    float snoise(vec3 v)
      {
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    
    // First corner
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;
    
    // Other corners
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
    
      //   x0 = x0 - 0.0 + 0.0 * C.xxx;
      //   x1 = x0 - i1  + 1.0 * C.xxx;
      //   x2 = x0 - i2  + 2.0 * C.xxx;
      //   x3 = x0 - 1.0 + 3.0 * C.xxx;
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
      vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
    
    // Permutations
      i = mod289(i);
      vec4 p = permute( permute( permute(
                 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
               + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    
    // Gradients: 7x7 points over a square, mapped onto an octahedron.
    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
      float n_ = 0.142857142857; // 1.0/7.0
      vec3  ns = n_ * D.wyz - D.xzx;
    
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
    
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
    
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
    
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
    
      //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
      //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
    
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
    
    //Normalise gradients
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
    
    // Mix final noise value
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                    dot(p2,x2), dot(p3,x3) ) );
      }
  
  float fsnoise(float val1, float val2, float val3){
    return snoise(vec3(val1,val2,val3));
  }

  vec3 distortFunct(vec3 transformed, float factor) {
    float radiusVariation = -fsnoise(
      transformed.x * radiusNoiseFrequency + time,
      transformed.y * radiusNoiseFrequency + time,
      transformed.z * radiusNoiseFrequency + time 
    ) * radiusVariationAmplitude * factor;
    return normalize(transformed) * (radiusVariation + radius);
  }

  vec3 orthogonal(vec3 v) {
    return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)
    : vec3(0.0, -v.z, v.y));
  }

  vec3 distortNormal(vec3 position, vec3 distortedPosition, vec3 normal){
    vec3 tangent1 = orthogonal(normal);
    vec3 tangent2 = normalize(cross(normal, tangent1));
    vec3 nearby1 = position + tangent1 * 0.1;
    vec3 nearby2 = position + tangent2 * 0.1;
    vec3 distorted1 = distortFunct(nearby1, 1.0);
    vec3 distorted2 = distortFunct(nearby2, 1.0);
    return normalize(cross(distorted1 - distortedPosition, distorted2 - distortedPosition));
  }
   
  void main() {
      float updateTime = time * 0.0001;
      vec3 transformed = position.xyz * 6.;
      transformed = distortFunct(transformed, 0.1);
      vec3 distortedNormal = distortNormal(position, transformed, normal);
      vec3 vNormal = normal + distortedNormal;
      
      vec3 scroll = seed * 1000. * vec3(1.);
      float offset = fsnoise(scroll.x + updateTime * 0.4, scroll.y * updateTime * 0.4, scroll.z + updateTime * 0.4);
      
      vec3 pos = transformed * offset;
      float time_pos = updateTime * .3 + seed * 0.5 + seed * 100.;
      pos.x += 0.025 * fsnoise(time_pos, time_pos, time_pos);
      pos.y += 0.3 * sin(time_pos);
      pos.z += 0.025 * fsnoise(time_pos, time_pos, time_pos);
      
      gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(pos, 1.);
  }
`;

export const frag = `
  precision highp float;
  
  #define fogNear 1.
  #define fogFar 2.5
  #define fogColor vec3(0., 0., 0.)

  void main() {
    gl_FragColor = vec4(0.5, 0.5, 0.5, 1);
    
    // account for fog
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    float fogFactor = smoothstep( fogNear, fogFar, depth );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
  }
`;

export const useParticleMaterial = (
  shaderParams?: Partial<ShaderMaterialParameters>
) =>
  useMemo(
    () =>
      new ShaderMaterial({
        ...uniforms(),
        vertexShader: vert,
        fragmentShader: frag,
        ...shaderParams,
      }),
    [frag, vert, uniforms]
  );
