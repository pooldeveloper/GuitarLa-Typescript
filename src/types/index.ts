export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export interface CartItem extends Guitar{
    quantity: number
}