#!/usr/bin/env python3
"""Inserts a new document in a collection based on kwargs"""

def insert_school(mongo_collection, **kwargs):
    """Creates a kwargs document and returns the new id"""
    return mongo_collection.insert_one(kwargs).inserted_id
