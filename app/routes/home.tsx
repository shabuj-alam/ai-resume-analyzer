import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your job!" },
  ];
}

export default function Home() {
    
  const { auth, fs } = usePuterStore();
  const navigate = useNavigate();

  const [resume, setResume] = useState();

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  // useEffect(() => {
  //   const loadResume = async () => {
  //     const blob = await fs.read(resume.imagePath);
  //     if(!blob) return;
  //     let url = URL.createObjectURL(blob);
  //     setResume(url);
  //   }

  //   loadResume();
  // }, [])
  

  // @ts-ignore
    return (
      <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar />
        <section className="main-section py-16">
          <div className="page-heading">
            <h1> Track Your Application & Resume Ratings</h1>
            <h2> Review your submission and check AI-powered feedback. </h2>
          </div>

          {resumes?.length > 0 
          ? 
            (
            <div className="resumes-section">
              {resumes.map((resume: Resume) => (
                <ResumeCard key={resume.id} resume={resume} />
              ))}
            </div>
            )
          : 
            null
          }
        </section>

        
      </main>
    );
}
