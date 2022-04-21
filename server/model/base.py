from sqlalchemy.sql import func
from sqlalchemy import Integer, Column, DateTime
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class BaseModal(Base):
    __abstract__ = True
    id = Column(Integer(), primary_key=True, comment="id, 主键")
    created_at = Column(DateTime(timezone=True), server_default=func.now(), comment="created_at, 创建时间")
    updated_at = Column(DateTime(timezone=True), onupdate=func.now(), comment="updated_at, 更新时间")
    deleted_at = Column(DateTime(timezone=True), comment="deleted_at, 删除时间")
