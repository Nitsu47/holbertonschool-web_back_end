#!/usr/bin/env python3
"""Provides some stats about Nginx logs stored in MongoDB"""


from pymongo import MongoClient

if __name__ == "__main__":
    """
    Establishes a local connection to MongoDB,
    accesses the 'logs' database in the 'nginx' collection,
    counts the number of documents in the collection,
    defines the HTTP methods that I want,
    counts the number of documents with the specified methods,
    counts the number of documents with 'method=GET' and 'path=/status',
    prints each method followed by the number of documents with that method,
    and finally prints the number of documents specifically
    with 'method=GET' and 'path=/status'.
    """
    standard_client = MongoClient("mongodb://127.0.0.1:27017")
    collection_nginx = standard_client.logs.nginx

    count_nginx = collection_nginx.count_documents({})

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    num_methods = {method: collection_nginx.count_documents
                   ({"method": method}) for method in methods}

    status_get = collection_nginx.count_documents(
        {"method": "GET", "path": "/status"})

    print(f"{count_nginx} logs\nMethods:")
    for method, count in num_methods.items():
        print(f"\tmethod {method}: {count}")
    print(f"{status_get} status check")
