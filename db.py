import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="seeevent",     # Your DB name
    user="postgres",         # Default username
    password="456123" # Your DB password
)
cursor = conn.cursor()
