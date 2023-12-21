import React from "react";
import "./LandingBody.css";
import { GiTeacher } from "react-icons/gi";
import { LuClipboardEdit } from "react-icons/lu";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { GrSchedules } from "react-icons/gr";

const LandingBody = () => {
    return (
        <div className="feature-section-container">
            <div className="feature-section-teacher-student-interaction">
                <div className="feature-section-image-container">
                    <GiTeacher style={{ fontSize: '10em' }} />
                </div>
                <div className="feature-section-text-container">
                    <h3 className="feature-section-heading">
                        Teacher Student Interaction Just Got Easier!
                    </h3>
                    <p className="primary-text">
                    Connecting with students has never been more seamless. 
                    Our platform provides a user-friendly interface for both teachers and students, fostering effective communication and collaboration. 
                    Whether it's sharing resources, giving feedback, or discussing assignments, our tools make the educational experience more engaging.
                    </p>
                </div>
            </div>
            <div className="feature-section-attendance-system">
                <div className="feature-section-image-container">
                    <LuClipboardEdit style={{ fontSize: '10em' }} />
                </div>
                <div className="feature-section-text-container">
                    <h3 className="feature-section-heading">
                        Attendance Management
                    </h3>
                    <p className="primary-text">
                    Effortlessly keep track of attendance with our intuitive system. 
                    Teachers can easily mark attendance, and students can view their attendance records. 
                    The automated system reduces manual work, ensuring accurate and efficient attendance management for a smoother academic experience.
                    </p>
                    
                </div>
            </div>
            <div className="feature-section-alerting">
                <div className="feature-section-image-container">
                    <HiOutlineBellAlert style={{ fontSize: '10em' }}/>
                </div>
                <div className="feature-section-text-container">
                    <h3 className="feature-section-heading">
                        Alerting
                    </h3>
                    <p className="primary-text">
                    Stay informed and connected with our alerting system. 
                    Receive timely notifications about important updates, announcements, and events. 
                    Teachers can communicate efficiently with students, and students can stay up-to-date on essential information, enhancing overall communication within the educational community.
                    </p>
                </div>
            </div>
            <div className="feature-section-class-scheduling">
                <div className="feature-section-image-container">
                <GrSchedules style={{ fontSize: '10em' }}/>
                </div>
                <div className="feature-section-text-container">
                    <h3 className="feature-section-heading">
                        Class Scheduling
                    </h3>
                    <p className="primary-text">
                    Our advanced class scheduling feature simplifies the process of organizing and managing classes. 
                    Teachers can easily create schedules, share them with students, and make adjustments as needed. 
                    Students can access their schedules, making it convenient for everyone to stay on top of their classes and activities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingBody;
