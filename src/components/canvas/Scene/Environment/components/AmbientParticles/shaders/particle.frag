precision highp float;

#define fogNear 1.
#define fogFar 2.5

uniform vec3 color;
uniform vec3 fogColor;


void main() {
  gl_FragColor = vec4(color, 1);

  // account for fog
  float depth = gl_FragCoord.z / gl_FragCoord.w;
  float fogFactor = smoothstep(fogNear, fogFar, depth);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
}
