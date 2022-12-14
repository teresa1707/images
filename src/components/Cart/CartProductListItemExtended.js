import { Button, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import './CartProductListExtended.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import { Quantity } from 'components/Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useDispatch, useSelector } from 'react-redux'

export const CartProductListItemExtended = ({ product, productCount }) => {
    const isLiked = useSelector((state) => state.productsLikeState[product.id])
    const dispatch = useDispatch()

    return (
        <Grid item xs={12} sm={6}>
            <Card className="cart-product-extended">
                <div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="media"
                    />
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <p>Price for one item : {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        onDecrementClick={() =>
                            productCount === 1
                                ? dispatch({
                                      type: 'REMOVE_PRODUCT_FROM_CART',
                                      id: product.id,
                                  })
                                : dispatch({
                                      type: 'CHANGE_PRODUCT_QUANTITY',
                                      id: product.id,
                                      quantity: productCount - 1,
                                  })
                        }
                        onIncrementClick={() =>
                            dispatch({
                                type: 'CHANGE_PRODUCT_QUANTITY',
                                id: product.id,
                                quantity: productCount + 1,
                            })
                        }
                        count={productCount}
                        minCount={0}
                    />
                    <br />
                    <Button
                        onClick={() =>
                            dispatch({
                                type: 'REMOVE_PRODUCT_FROM_CART',
                                id: product.id,
                            })
                        }
                        variant="outlined"
                    >
                        <DeleteIcon />
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            isLiked
                                ? dispatch({
                                      type: 'DISLIKE',
                                      id: product.id,
                                  })
                                : dispatch({
                                      type: 'LIKE',
                                      id: product.id,
                                  })
                        }
                    >
                        {' '}
                        {isLiked ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderIcon />
                        )}{' '}
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
