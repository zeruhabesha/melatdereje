import React from 'react';

function ArchitectSkills() {
  const skills = [
    { name: 'AutoCAD', abbreviation: 'AC' },
    { name: 'SketchUp', abbreviation: 'SU' },
    { name: 'ArchiCAD', abbreviation: 'AR' },
    { name: 'Lumion', abbreviation: 'LM' },
    { name: 'V-Ray', abbreviation: 'VR' },
    { name: 'Photoshop', abbreviation: 'PS' },
    { name: 'Illustrator', abbreviation: 'AI' },
    { name: 'Drafting', abbreviation: 'DR' },
    { name: 'Planning', abbreviation: 'PL' }
  ];

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-50 transition-colors duration-300">
                <span className="text-xl font-bold text-gray-600 hover:text-blue-600">
                  {skill.abbreviation}
                </span>
              </div>
              <span className="mt-4 text-sm font-medium text-gray-700">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArchitectSkills;