import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Work as WorkIcon, School as SchoolIcon, Star as StarIcon } from "@mui/icons-material";

const Experience = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        date="june-july [2023]"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontWeight: 'bold' }}>Research Intern at IIT-BHU</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontWeight: 'bold' }}>IIT-BHU VARANASI</h4>
        <p>
          Web Development, User Experience, Visual Design, SEO and maintaining government official website onsite.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(233, 30, 99)' }}
        date="2010 - 2011"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontWeight: 'bold' }}> </h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontWeight: 'bold' }}> UI-Intern at Indo-web Agency </h4>
        <p>
          applied material-ui for creating admin panel as a frontend project with reactjs and reusable components
        </p>
      </VerticalTimelineElement>
    
    </VerticalTimeline>
  );
}

export default Experience;
