import React, { useState, useEffect } from "react";
import { Alert, ListGroup } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useToasts } from "react-toast-notifications";
import "./Alerts.css";

const Alerts = () => {
  const { addToast } = useToasts();

  const [assignments] = useState([
    { id: 1, title: "Math Assignment", deadline: new Date("2023-12-30") },
    // Add more assignments as needed
  ]);

  const [classes] = useState([
    { id: 1, title: "History Class", time: "10:00" },
    // Add more classes as needed
  ]);

  const [showAlert, setShowAlert] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const pendingAssignments = assignments.filter(
      (assignment) => assignment.deadline > new Date()
    );

    const now = new Date();
    const upcomingClasses = classes.filter((scheduledClass) => {
      const classTime = new Date(
        now.toDateString() + " " + scheduledClass.time
      );
      return classTime > now;
    });

    setShowAlert(pendingAssignments.length > 0 || upcomingClasses.length > 0);

    if (upcomingClasses.length > 0) {
      const timeDiff = new Date(upcomingClasses[0].time) - now;
      setTimer(Math.floor(timeDiff / 1000)); // Convert milliseconds to seconds

      const intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 0) {
            clearInterval(intervalId);
            // Show notification when the timer reaches 0
            addToast(`Class ${upcomingClasses[0].title} is starting now!`, {
              appearance: "success",
              autoDismiss: true,
            });
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
  }, [assignments, classes, addToast]);

  const calculateProgress = () => {
    return (timer / (60 * 60)) * 100; // Assuming timer is in seconds, convert to hours
  };

  return (
    <div className="alerts-container">
      {showAlert && (
        <Alert
          variant="warning"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>Alert!</Alert.Heading>
          <p>
            Your assignment is pending, and classes are scheduled for today.
          </p>
          <hr />
          <div className="assignment-section">
            <h4>Pending Assignments</h4>
            <ListGroup>
              {assignments.map((assignment) => (
                <ListGroup.Item key={assignment.id}>
                  {assignment.title} - Deadline:{" "}
                  {assignment.deadline.toDateString()}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <hr />
          <div className="class-section">
            <h4>Upcoming Classes</h4>
            <ListGroup>
              {classes.map((scheduledClass) => (
                <ListGroup.Item key={scheduledClass.id}>
                  {scheduledClass.title} - Time: {scheduledClass.time}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <hr />
          <div className="timer-section">
            <h4>Time Until Next Class</h4>
            <div className="circular-progress">
              <CircularProgressbar
                value={calculateProgress()}
                text={`${Math.floor(timer / 60)}:${timer % 60}`}
                strokeWidth={10}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "#f00",
                  trailColor: "#444",
                })}
              />
            </div>
          </div>
        </Alert>
      )}
    </div>
  );
};

export default Alerts;
