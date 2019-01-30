INSERT INTO customer
    (username,firstname,lastname,auth_id,picture)
VALUES
    ($1, $2, $3, $4, $5
    )
RETURNING *;