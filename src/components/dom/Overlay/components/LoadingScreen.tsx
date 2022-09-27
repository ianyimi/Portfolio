import styles from "./LoadingScreen.module.css";
import {motion} from "framer-motion";
import * as React from "react";
import {useProgress} from "@react-three/drei";

export default function LoadingScreen() {
  
  const progress = useProgress(state => state.progress);
  const sceneLoaded = progress === 100;
  
  const draw = {
    hidden: (i) => {
      const fadedColor = i === 0 ? "#7a7a7a" : "#7a0404"
      return {
        fill: fadedColor
      }
    },
    visible: (i) => {
      console.log(i);
      // const newPathLength = i === 0 ? progress / 50 : Math.max((progress - 50) / 50, 0);
      const newFill = i === 0 ? "#fafafa" : "#fa0404"
      return {
        fill: newFill,
        transition: {
          duration: 5,
          type: "spring"
        }
      }
    }
  }
  
  return (!sceneLoaded &&
    <div className={styles.container}>
      <motion.svg
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={400}
        height={400}
        viewBox="0, 0, 400,400"
        initial="hidden"
        animate="visible"
      >
        <g id="svgg">
          <motion.path
            id="path0"
            d="M229.025 52.500 C 228.943 52.775,228.678 54.080,228.437 55.400 C 227.875 58.481,226.886 63.983,226.388 66.800 C 226.174 68.010,225.738 70.440,225.419 72.200 C 225.100 73.960,224.370 78.190,223.797 81.600 C 223.225 85.010,222.594 88.610,222.397 89.600 C 221.621 93.497,221.158 96.043,220.145 102.000 C 219.028 108.564,218.701 110.461,218.074 114.000 C 217.860 115.210,217.117 119.440,216.422 123.400 C 215.727 127.360,214.998 131.500,214.802 132.600 C 214.606 133.700,214.061 136.760,213.590 139.400 C 213.119 142.040,212.217 147.170,211.586 150.800 C 210.954 154.430,210.147 159.020,209.791 161.000 C 209.435 162.980,208.976 165.545,208.772 166.700 C 208.567 167.855,208.229 169.745,208.021 170.900 C 207.812 172.055,207.071 176.330,206.374 180.400 C 205.677 184.470,204.948 188.610,204.755 189.600 C 204.380 191.520,204.311 191.914,202.398 203.000 C 201.715 206.960,200.968 211.190,200.738 212.400 C 200.508 213.610,200.181 215.410,200.012 216.400 C 199.843 217.390,198.942 222.520,198.010 227.800 C 197.078 233.080,196.166 238.300,195.984 239.400 C 195.607 241.667,193.026 256.256,192.410 259.600 C 192.187 260.810,191.637 263.870,191.187 266.400 C 189.242 277.347,188.349 282.510,187.590 287.200 C 187.145 289.950,186.611 292.920,186.402 293.800 C 186.194 294.680,185.289 299.720,184.392 305.000 C 183.495 310.280,182.603 315.410,182.411 316.400 C 181.801 319.536,181.220 322.803,179.992 330.000 C 179.336 333.850,178.416 339.016,177.949 341.481 C 177.482 343.945,177.206 346.240,177.337 346.581 C 177.678 347.469,224.429 347.529,225.165 346.642 C 225.420 346.335,225.811 345.030,226.035 343.742 C 226.555 340.747,227.458 335.624,227.963 332.800 C 229.553 323.901,230.501 318.497,231.016 315.400 C 231.344 313.420,231.790 310.900,232.005 309.800 C 232.220 308.700,232.566 306.810,232.774 305.600 C 234.315 296.619,235.707 288.656,236.061 286.800 C 236.625 283.842,237.012 281.684,237.748 277.400 C 238.562 272.661,240.159 263.567,241.400 256.600 C 241.949 253.520,242.852 248.390,243.408 245.200 C 243.963 242.010,244.691 237.870,245.024 236.000 C 245.358 234.130,245.803 231.610,246.015 230.400 C 246.226 229.190,246.588 227.210,246.818 226.000 C 247.048 224.790,247.484 222.270,247.786 220.400 C 248.088 218.530,248.633 215.380,248.996 213.400 C 249.359 211.420,249.814 208.900,250.006 207.800 C 250.198 206.700,250.461 205.260,250.591 204.600 C 250.721 203.940,251.003 202.500,251.219 201.400 C 251.434 200.300,252.067 196.610,252.625 193.200 C 253.594 187.282,253.911 185.448,254.788 180.700 C 255.477 176.966,257.633 164.664,257.995 162.400 C 258.189 161.190,258.643 158.580,259.005 156.600 C 259.932 151.529,261.036 145.329,262.459 137.200 C 263.134 133.350,263.855 129.300,264.063 128.200 C 264.475 126.013,264.622 125.155,266.153 116.000 C 266.723 112.590,267.366 108.900,267.581 107.800 C 267.797 106.700,268.079 105.260,268.209 104.600 C 268.594 102.646,269.088 99.769,270.169 93.200 C 270.731 89.790,271.389 86.010,271.633 84.800 C 272.496 80.522,272.786 78.960,273.417 75.200 C 273.767 73.110,274.213 70.590,274.408 69.600 C 274.603 68.610,274.872 66.990,275.005 66.000 C 275.246 64.202,275.476 62.922,276.602 57.117 C 276.931 55.421,277.200 53.576,277.200 53.017 L 277.200 52.000 253.187 52.000 C 234.324 52.000,229.143 52.107,229.025 52.500 M105.309 158.500 C 105.095 158.775,104.699 160.170,104.430 161.600 C 104.160 163.030,103.778 165.010,103.580 166.000 C 103.383 166.990,102.755 170.590,102.185 174.000 C 101.616 177.410,100.981 181.100,100.774 182.200 C 100.568 183.300,100.231 185.190,100.026 186.400 C 99.821 187.610,99.360 190.220,99.002 192.200 C 98.265 196.274,96.493 206.385,95.987 209.400 C 95.586 211.787,92.986 226.475,92.410 229.600 C 91.756 233.150,90.421 240.659,89.601 245.400 C 87.925 255.084,86.352 264.072,85.435 269.200 C 84.903 272.170,83.993 277.300,83.412 280.600 C 82.832 283.900,82.179 287.590,81.963 288.800 C 81.359 292.174,80.546 296.809,79.401 303.400 C 78.828 306.700,78.179 310.390,77.959 311.600 C 77.738 312.810,77.304 315.240,76.994 317.000 C 76.684 318.760,76.251 321.190,76.032 322.400 C 75.812 323.610,75.261 326.760,74.805 329.400 C 74.350 332.040,73.607 336.270,73.154 338.800 C 72.701 341.330,72.233 344.165,72.113 345.100 L 71.896 346.800 95.924 346.800 C 112.082 346.800,120.037 346.664,120.209 346.385 C 120.350 346.157,120.714 344.492,121.017 342.685 C 121.621 339.092,122.031 336.768,122.975 331.600 C 123.316 329.730,124.145 325.050,124.816 321.200 C 126.662 310.614,127.609 305.212,128.009 303.000 C 128.208 301.900,129.106 296.770,130.006 291.600 C 130.905 286.430,131.793 281.390,131.978 280.400 C 132.436 277.962,133.857 270.013,134.840 264.400 C 135.283 261.870,135.815 258.855,136.023 257.700 C 136.230 256.545,136.570 254.655,136.777 253.500 C 136.984 252.345,137.887 247.170,138.783 242.000 C 139.679 236.830,140.865 230.080,141.418 227.000 C 141.971 223.920,142.867 218.790,143.410 215.600 C 143.953 212.410,144.678 208.270,145.022 206.400 C 145.721 202.593,145.995 201.050,147.177 194.300 C 147.630 191.715,148.370 187.485,148.823 184.900 C 149.718 179.786,150.252 176.791,150.767 174.000 C 152.153 166.490,153.251 159.109,153.057 158.605 C 152.741 157.780,105.949 157.678,105.309 158.500 "
            stroke="none"
            fill="#fafafa"
            fillRule="evenodd"
            variants={draw}
            custom={0}
            overflow="hidden"
          />
          <motion.path
            id="path1"
            d="M123.198 51.700 C 123.194 51.842,122.470 56.014,122.017 58.500 C 121.807 59.655,121.259 62.760,120.800 65.400 C 120.341 68.040,119.784 71.190,119.563 72.400 C 119.341 73.610,118.997 75.590,118.798 76.800 C 118.599 78.010,118.267 79.900,118.059 81.000 C 117.852 82.100,117.140 86.150,116.476 90.000 C 115.813 93.850,115.145 97.495,114.992 98.100 L 114.713 99.200 139.357 99.200 C 152.910 99.200,164.003 99.065,164.007 98.900 C 164.011 98.735,164.290 97.070,164.626 95.200 C 164.963 93.330,165.776 88.740,166.434 85.000 C 167.092 81.260,167.793 77.300,167.992 76.200 C 168.191 75.100,168.732 72.040,169.195 69.400 C 169.657 66.760,170.404 62.530,170.856 60.000 C 171.308 57.470,171.773 54.545,171.890 53.500 L 172.102 51.600 147.651 51.600 C 134.203 51.600,123.199 51.645,123.198 51.700 M285.889 106.255 C 285.763 107.105,285.279 109.960,284.813 112.600 C 284.347 115.240,283.602 119.470,283.158 122.000 C 282.715 124.530,282.182 127.500,281.975 128.600 C 281.768 129.700,281.432 131.590,281.227 132.800 C 280.463 137.314,278.337 149.470,277.975 151.400 C 277.768 152.500,277.338 154.930,277.020 156.800 C 276.701 158.670,276.259 161.190,276.038 162.400 C 275.817 163.610,275.172 167.300,274.606 170.600 C 274.040 173.900,273.496 176.870,273.397 177.200 C 273.298 177.530,273.018 179.060,272.774 180.600 C 272.531 182.140,272.187 184.210,272.010 185.200 C 271.834 186.190,271.108 190.330,270.397 194.400 C 268.507 205.219,268.437 205.614,268.007 207.800 C 267.790 208.900,267.344 211.420,267.016 213.400 C 266.342 217.457,264.469 228.051,263.179 235.100 C 261.234 245.726,261.253 245.161,262.599 253.200 C 263.170 256.610,263.816 260.480,264.033 261.800 C 264.845 266.733,265.177 268.727,265.993 273.596 C 266.453 276.343,266.995 279.673,267.195 280.996 C 267.396 282.318,267.758 284.480,268.000 285.800 C 268.475 288.393,268.830 290.497,269.785 296.400 C 271.125 304.681,271.645 307.893,271.987 310.000 C 272.183 311.210,272.904 315.530,273.588 319.600 C 274.272 323.670,275.104 328.710,275.436 330.800 C 275.768 332.890,276.211 335.500,276.421 336.600 C 276.631 337.700,277.077 340.299,277.414 342.374 C 277.750 344.450,278.222 346.385,278.462 346.674 C 279.200 347.564,325.934 347.436,326.277 346.544 C 326.483 346.006,323.697 327.518,322.396 320.800 C 321.962 318.556,321.496 315.773,319.984 306.400 C 318.826 299.215,318.440 296.903,317.596 292.100 C 317.374 290.835,316.468 285.300,315.582 279.800 C 314.697 274.300,313.798 268.900,313.584 267.800 C 313.371 266.700,312.025 258.600,310.593 249.800 C 309.161 241.000,307.802 232.720,307.572 231.400 C 307.113 228.756,304.579 213.598,303.962 209.800 C 303.747 208.480,303.410 206.410,303.212 205.200 C 303.013 203.990,302.488 200.750,302.043 198.000 C 301.598 195.250,301.044 191.920,300.812 190.600 C 300.579 189.280,300.223 187.120,300.021 185.800 C 299.818 184.480,299.297 181.330,298.862 178.800 C 298.427 176.270,297.777 172.310,297.417 170.000 C 297.058 167.690,296.589 164.900,296.374 163.800 C 296.159 162.700,294.818 154.600,293.394 145.800 C 291.970 137.000,290.631 128.900,290.419 127.800 C 290.207 126.700,289.484 122.290,288.812 118.000 C 286.858 105.515,286.319 103.349,285.889 106.255 "
            stroke="none"
            fill="#fa0404"
            fillRule="evenodd"
            variants={draw}
            custom={1}
            overflow="hidden"
          />
        </g>
      </motion.svg>
      {progress.toFixed(2)}%
    </div>
  )
}
