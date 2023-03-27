import { Paper, Button } from '@mui/material'

function Item(item)
{
    return (
        <Paper>
            <img src={item.image} alt={item.title} style={{width:"100%", height:"45vh"}}/>
            <h2>{item.title}</h2>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Item;