import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getproducts } from '../service/getProducts';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { Context } from '../context/Context';

export default function Products() {
    const { dispatch } = useContext(Context)
    const products = getproducts()
    function OrderBtnClick(item: any) {
        let message = `<b>Site Order</b> \n`
        message += `<b>Title: ${item.title}</b> \n`
        message += `<b>Description: ${item.description}</b> \n`
        message += `------------------------------ \n`
        message += `<b>Price: ${item.price} $</b> \n`
        dispatch({ type: "order", payload: {message, image:item.images[0]}})
    }
    return (
        <div className='flex justify-between flex-wrap gap-[20px] p-5 pt-[100px]'>
            {products.map((item: any) => (
                <Card key={item.id} className='!shadow-2xl !bg-[#f8f7f7] !rounded-[10px] pt-[10px]' sx={{ maxWidth: 345 }}>
                    <CardMedia
                        className='!h-[300px] !object-contain'
                        image={item.images[0]}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography className='!line-clamp-1' gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography className='!line-clamp-3' variant="body2" sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button className="w-full" variant='outlined' color={"success"} onClick={() => OrderBtnClick(item)}>Order</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}