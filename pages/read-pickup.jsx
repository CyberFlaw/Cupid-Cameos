import { CountdownCircleTimer } from 'react-countdown-circle-timer';
  
export default function Timer(){
  return (
    <div className="flex sm:flex-row flex-col items-center sm:mb-5 ">
      <h3>Your Time starts in</h3>
      <CountdownCircleTimer
        isPlaying
        duration={28800}
        colors={[
          ['#004777', 0.33],
          ['#F7B801', 0.33],
          ['#A30000', 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
    
  )
}