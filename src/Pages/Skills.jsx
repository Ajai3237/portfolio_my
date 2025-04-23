import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const skillsData = [
  { name: "HTML", level: 95 },
  { name: "CSS/Tailwind", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Git/GitHub", level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-br from-balck to-gray-900  py-40 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-8">My Skills</h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Here’s a quick look at my technical skills and how comfortable I am with each.
        </p>

        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={skillsData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="level" fill="#2563eb" radius={[0, 10, 10, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Skills;
