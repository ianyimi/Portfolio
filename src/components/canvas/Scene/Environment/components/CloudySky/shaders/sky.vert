varying vec3 absPosition;
varying vec2 vUv;
void main() {
  vUv = uv;
  absPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
