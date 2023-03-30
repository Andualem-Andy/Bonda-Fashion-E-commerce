import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import product1 from "../../assets/products/1.jpg";
import product2 from "../../assets/products/2.jpg";
import product3 from "../../assets/products/3.jpg";
import product4 from "../../assets/products/4.jpg";
import product5 from "../../assets/products/5.jpg";
import product6 from "../../assets/products/6.jpg";
import product7 from "../../assets/products/7.jpg";
import product8 from "../../assets/products/8.jpg";
import product9 from "../../assets/products/9.jpg";



const products = [
    {
        id: 1,
        productName: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 999.0,
        productImage: product1,
    },

    {
        id: 2,
        productName: "MBJ Women's Solid Short Sleeve Boat Neck V",
        price: 1999.0,
        productImage: product2,
    },

    {
        id: 3,
        productName: "Mens Casual Premium Slim Fit T-Shirts",
        price: 699.0,
        productImage: product3,
    },

    {
        id: 4,
        productName: "WLS Van Gogh Denim Jacket",
        price: 228.0,
        productImage: product4,
    },

    {
        id: 5,
        productName: "LED Light Strips",
        price: 19.99,
        productImage: product5,
    },

    {
        id: 6,
        productName: "Lock and Love Women's Leather Jacket",
        price: 68.0,
        productImage: product6,
    },

    {
        id: 7,
        productName: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 120.0,
        productImage: product7,
    },

    {
        id: 8,
        productName: "Art Class Girls Stretch Overall Dress Heirloom Blue Size Small 6/6x",
        price: 40.0,
        productImage: product8,
    },
    {
        id: 9,
        productName: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 40.0,
        productImage: product9,
    },
];

const addresses = ['Addis Ababa', 'worda', 'Bole', '1000', 'Ethiopia'];
const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr Andualem Asamenew' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem key={product.productName} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.name} secondary={product.productName} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        $34.06
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>Andualem Asamenew</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
