from core.db.db import sql_cursor


def create_testcase(name: str, description: str, data: str):
    sql_cursor.execute("INSERT INTO testcases (name, description, data) VALUES (?, ?, ?)", (name, description, data))
    sql_cursor.connection.commit()


def get_all_testcases():
    sql_cursor.execute("SELECT * FROM testcases")
    return sql_cursor.fetchall()

def get_testcase_by_id(id: int):
    sql_cursor.execute("SELECT * FROM testcases WHERE id = ?", (id,))
    return sql_cursor.fetchone()

def get_testcase_by_name(name: str):
    sql_cursor.execute("SELECT * FROM testcases WHERE name = ?", (name,))
    return sql_cursor.fetchone()