import axios from "axios";

function is_in_home_page( input = "" )
{
    return input.match( /<title>DQ 地球圖輯隊 帶你看透全世界<\/title>/g );
}

async function request_module( url = "https://dq.yam.com/post.php?id=12432" )
{
    if( /dq.yam.com/g.test( url ) === false )
    {
        throw new Error( "The website is not from dq.yam.com!" );
    }
    try
    {
        const response = await axios.get( url );
        if( response.status === 200 && !is_in_home_page( response.data ) )
        {
            return response.data;
        }
        else
        {
            throw new Error( "The article requesting failed!" );
        }
    }
    catch (error)
    {
        throw new Error( error );
    }
}

export default request_module;
