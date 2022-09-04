import {
  InstructionsStyle,
  InstructionsStyle1,
  InstructionsStyle2,
  InstructionsStyle3,
  InstructionsStyle4,
} from '@/components/dom/Instructions.style'
export default function Instructions() {
  return (
    <InstructionsStyle
      style={{
        maxWidth: 'calc(100% - 28px)',
      }}
    >
      <InstructionsStyle1>
        This is a minimal starter for Nextjs + Threejs. Click on the cube to
        navigate to the `/box` page. OrbitControls is enabled by default.
      </InstructionsStyle1>
      <InstructionsStyle2>
        Step 1 -<InstructionsStyle3>update:</InstructionsStyle3>
        <InstructionsStyle4>@/pages/index</InstructionsStyle4>
        <br />
        Step 2 -<InstructionsStyle3>update:</InstructionsStyle3>
        <InstructionsStyle4>
          @/components/canvas/Shader/Shader
        </InstructionsStyle4>
        <br />
        Step 3 -<InstructionsStyle3>delete:</InstructionsStyle3>
        <InstructionsStyle4>@/pages/box</InstructionsStyle4>
        <br />
        Step 4 -<InstructionsStyle3>update header:</InstructionsStyle3>
        <InstructionsStyle4>@/config</InstructionsStyle4>
        <br />
        Step 5 -<InstructionsStyle3>delete:</InstructionsStyle3>
        <InstructionsStyle4>@/components/dom/Instructions</InstructionsStyle4>
      </InstructionsStyle2>
    </InstructionsStyle>
  )
}
