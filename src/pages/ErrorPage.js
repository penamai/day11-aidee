import { useRouteError } from 'react-router-dom';
import { Typography } from 'antd';

const { Title } = Typography;

const titleStyles = {fontVariant:"small-caps", color:"#DDC397"}
const subtitleStyles = {fontVariant:"small-caps", color:"#994841"}

export default function ErrorPage(){
    const error = useRouteError();
    return(
        <div>
            <Title style={titleStyles}> This is Error Page </Title>
            <Title level={5} style={subtitleStyles}>Error status: {error.statusText}</Title>
            <Title level={5} style={subtitleStyles}>Error message: {error.message}</Title>
        </div>
    );
}