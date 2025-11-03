import { useRouter } from 'next/router';
import ScenePlayer from '../../components/ScenePlayer';

export default function ViewEpisode() {
  const router = useRouter();
  const { id } = router.query;

  const scene = {
    background: '/assets/backgrounds/lab.jpg',
    characters: [
      { name: 'Rickish', src: '/assets/characters/rickish.png', side: 'left' },
      { name: 'Mortoid', src: '/assets/characters/mortoid.png', side: 'right' },
    ],
    lines: [
      { speaker: 'left', text: 'Morty, get in the portal!' },
      { speaker: 'right', text: 'Aw jeez, Rick!' },
    ],
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Episode: {id}</h1>
      <ScenePlayer scene={scene} />
    </div>
  );
}
