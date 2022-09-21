precision highp float;

uniform vec3 color;
uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;


void main() {
  gl_FragColor = vec4(color, 1);

  // account for fog
  float depth = gl_FragCoord.z / gl_FragCoord.w;
  float fogFactor = smoothstep(fogNear, fogFar, depth);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
}
