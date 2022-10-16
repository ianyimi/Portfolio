precision mediump float;

uniform vec3 color;
uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;
uniform float time;

#define brightness 2.0;
#define ray_brightness 6.0;
#define gamma -15.0;
#define spot_brightness 5.0;
#define ray_density 10.0;
#define curvature 300.0;
#define freq 8.0;
#define warp 1.0;
#define red 7.0;
#define green 2.0;
#define blue 1.0;

float hash( float n ){return fract(sin(n)*43758.5453);}

float noise( in vec2 x ) {
  x *= 1.75;
  vec2 p = floor(x);
  vec2 f = fract(x);
  f = f*f*(3.0-2.0*f);
  float n = p.x + p.y*57.0;
  float res = mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
  mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
  return res;
}

mat2 m2 = mat2( 0.80,  0.60, -0.60,  0.80 );
float fbm( in vec2 p ) {
  float z=2.;
  float rz = 0.;
  p *= 0.25;
  for (float i= 1.;i < 6.;i++ ) {
    rz += (sin(noise(p)*freq)*0.5+0.5) /z;
    z = z*2.;
    p = p*2.*m2;
  }
  return rz;
}

void main() {
  float t = -time*0.03;
  vec2 uv = gl_FragCoord.xy / RENDERSIZE.xy-0.5;
  uv.x *= RENDERSIZE.x/RENDERSIZE.y;
  uv *= curvature*0.05+0.0001;
  float r  = sqrt(dot(uv,uv));
  float x = dot(normalize(uv), vec2(.5,0.))+t;
  float y = dot(normalize(uv), vec2(.0,.5))+t;
//  if (warp) {
//    x = fbm(vec2(y*ray_density*0.5,r+x*ray_density*.2));
//    y = fbm(vec2(r+y*ray_density*0.1,x*ray_density*.5));
//  }
  float val;
  val = fbm(vec2(r+y*ray_density,r+x*ray_density-y));
  val = smoothstep(gamma*.02-.1,ray_brightness+(gamma*0.02-.1)+.001,val);
  val = sqrt(val);
  vec3 col = val/vec3(red,green,blue);
  col = clamp(1.-col,0.,1.);
  col = mix(col,vec3(1.),spot_brightness-r/0.1/curvature*200./brightness);

  gl_FragColor = vec4(col,1.0);
}
