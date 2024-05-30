import React, { useState, useEffect } from 'react';
import GPT4Integration from '../utils/GPT4Integration';
import TabMonitoring from '../utils/TabMonitoring';
import Notification from '../utils/Notification';

const StudyTargetInput = () => {
  const [studyTarget, setStudyTarget] = useState('');
  
  useEffect(() => {
    TabMonitoring.startMonitoring();
  }, []);

  const handleStudyTargetChange = (e) => {
    setStudyTarget(e.target.value);
  };

  const handleSubmitStudyTarget = () => {
    if (studyTarget.trim() !== '') {
      GPT4Integration.generateResponse(`Setting study target as: ${studyTarget}`);
    }
  };

  return (
    <div>
      <input type="text" value={studyTarget} onChange={handleStudyTargetChange} />
      <button onClick={handleSubmitStudyTarget}>Set Study Target</button>
    </div>
  );
};

export default StudyTargetInput;