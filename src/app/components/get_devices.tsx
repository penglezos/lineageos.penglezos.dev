import { promises as fs } from 'fs';

export default async function Devices() {
    const file = await fs.readFile(process.cwd() + '/public/devices.json', 'utf8');
    const data = JSON.parse(file);
    
    return (
    <div>
      <a href="#">
        <h1 className="mb-2 text-2xl font-semibold tracking-tighter">{data.name}</h1>
        <p>{data.codename}</p>
      </a>
    </div>
  );
  }