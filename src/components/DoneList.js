import DoneGroup from './DoneGroup';
import { Typography } from 'antd';

const titleStyle = {
    margin: 0, 
    fontVariant: 'small-caps', 
    color: '#DDC397'
}

const DoneList = () =>{
    return (
        <>
            <Typography.Title level={1} 
                              style={titleStyle}>
                Done List
            </Typography.Title>
            <DoneGroup />
        </>
    );
}

export default DoneList;