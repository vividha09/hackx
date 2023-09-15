import sqlite3

conn = sqlite3.connect("hospital.db")
cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY,
        name TEXT,
        esi INTEGER,
        ward_id INTEGER
    )
''')

cursor.execute('''
    CREATE TABLE IF NOT EXISTS medical_staff (
        id INTEGER PRIMARY KEY,
        name TEXT,
        specialization TEXT
    )
''')

cursor.execute('''
    CREATE TABLE IF NOT EXISTS wards (
        id INTEGER PRIMARY KEY,
        name TEXT,
        capacity INTEGER
    )
''')

conn.commit()
conn.close()
