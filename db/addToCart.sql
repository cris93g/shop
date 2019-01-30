insert into cart
    (quantity, item_id, customer_id)
values
    ($1, $2, $3)
returning *;