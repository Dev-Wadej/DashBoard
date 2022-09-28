import React from 'react'
import {SparklineComponent,Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts'



type SparklineType = {
  id:string;
  height:string;
  color:string;
  data: {}[];
  width:string;
  type:string;
  currentColor:string;

}

const SparkLine:React.FC<SparklineType> = ({id,height,color,data,width,type,currentColor}) => {
  return (
   <SparklineComponent 
      id={id}
     height={height}
     width={width}
      // type='Line'
      fill={color}
      lineWidth={1}
      valueType='Numeric'
      border={{color:currentColor, width:2}}
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${yval}',
        trackLineSettings:{
          visible:true
        }
      }}
      markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
      dataSource={data}
      xName="x"
      yName="yval"
      type='Line'
   >
     <Inject services={[SparklineTooltip]}/>
   </SparklineComponent>
  ) 
}

export default SparkLine
