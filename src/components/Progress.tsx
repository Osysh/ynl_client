interface ProgressProps {
  totalSteps: number;
  step: number;
}

export function Progress(props: ProgressProps) {
  return (
    <div style={{ width: '100%', display: 'flex', gap: 12 }}>
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{ backgroundColor: '#cacaca', width: '100%', height: 16, position: 'absolute', borderRadius: 16 }} />
        <div style={{ backgroundColor: 'rgb(41, 162, 199)', width: `${props.step / props.totalSteps * 100}%`, height: 16, position: 'absolute', borderRadius: 16 }} />
      </div>
      <div>{`${props.step}/${props.totalSteps} `}</div>
    </div>
  );
}
