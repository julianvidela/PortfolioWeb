
 import ProjectDetails from '@/features/projectPageComponent/ProjectPage';


import { use } from 'react';

export default function ProjectRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); 
  return <ProjectDetails params={{ id }} />;
}
