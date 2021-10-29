import {gql} from "@apollo/client";

export const addProduct = gql`
  mutation addProduct($name: String! , $quantity: Int!) {
    Product(name:$name, quantity: $quantity){
      name
      quantity
    }
  }
`;

