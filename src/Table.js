import { Avatar, Button } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function BasicTable() {
    return(
        <div>
        <div className="table-header-container"> 
           <h4>Product Sell</h4>
           <div>
                <Button 
                    size="small" 
                    variant="contained" 
                    color="grey"
                    startIcon={<SearchOutlinedIcon />}
                >
                search 
                </Button>
                <Button 
                    size="small"
                    color="grey"
                    variant="contained" 
                    endIcon={<KeyboardArrowDownIcon />}
                >
                Last 30 days
                </Button> 
            </div> 
        </div>
        <div className="product-header">
            <p>Product Name</p>
            <div className="product-header-details">
            <p>Stock</p>
            <p>Price</p>
            <p>Total Sales</p>
            </div>
        </div>
        <div className="product-content">
            <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
            <div className="product-description">
                <p className="product-heading">Abstract 3d</p>
                <p className="product-subheading">Lopem denum ocrpomonedum</p>
            </div>
            <div className="price-details">
                
            </div>
        </div>
        </div>
    )
}

export default BasicTable;