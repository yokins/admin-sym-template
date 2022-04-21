from sqlalchemy import String, Column, Text
from .base import BaseModal


class UserModal(BaseModal):
    __tablename__ = "articles"
    title = Column(String, nullable=False)
    content = Column(Text, nullable=False)
