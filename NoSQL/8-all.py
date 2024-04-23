#!/usr/bin/env python3
"""Lists all documents in a collection"""

def list_all(mongo_collection):
    """List all in 'mongo_collection'"""
    return [find for find in mongo_collection.find()]
