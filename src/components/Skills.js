import { Progress } from '@material-tailwind/react';
import React from 'react';

function Skills() {
   return (
      <div>
         <section class="skills section" id="skills">
            <h2 class="section__title">Skills</h2>
            <span class="section__subtitle">My technical level</span>
            <Progress value={50} label="Completed" />
         </section>
      </div>
   );
}

export default Skills;
