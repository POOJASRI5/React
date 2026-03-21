import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";

function ProductCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Product</Typography>
        <Typography>This is a product</Typography>
      </CardContent>
      <CardActions>
        <Button>Buy</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;