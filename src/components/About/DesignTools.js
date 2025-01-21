import React from 'react';

function DesignTools() {
  const tools = [
    { name: 'AutoCAD', shorthand: 'AC' },
    { name: 'Revit', shorthand: 'Rv' },
    { name: 'SketchUp', shorthand: 'SU' },
    { name: 'ArchiCAD', shorthand: 'AC' },
    { name: 'Lumion', shorthand: 'Lm' },
    { name: 'V-Ray', shorthand: 'VR' },
    { name: 'Enscape', shorthand: 'En' },
    { name: 'Twinmotion', shorthand: 'Tm' }
  ];

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors duration-300">
                <span className="text-xl font-bold text-gray-600 group-hover:text-blue-600">
                  {tool.shorthand}
                </span>
              </div>
              <span className="mt-4 text-sm font-medium text-gray-700">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DesignTools;