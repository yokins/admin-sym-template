from sqlalchemy import String, Column
from .base import BaseModal


class UserModal(BaseModal):
    __tablename__ = "users"
    account = Column(String, nullable=False)
    password = Column(String, nullable=False)
    avatar = Column(String, nullable=True)
