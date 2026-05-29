import SceneHeader    from '../center/SceneHeader.tsx';
import SceneAsciiArt  from '../center/SceneAsciiArt.tsx';
import SceneText      from '../center/SceneText.tsx';
import ChoicesSection from '../center/ChoicesSection.tsx';

export default function CenterPanel() {
  return (
    <main id="center-panel">
      <SceneHeader />
      <SceneAsciiArt />
      <SceneText />
      <ChoicesSection />
    </main>
  );
}
