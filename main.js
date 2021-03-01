const { MongoClient } = require('mongodb'); // Import MongoDB

class Crud {
  constructor(uri, database) {
    this.uri = uri;
    this.database = database;
  }

  async insertDocument(collection, value) {
    const client = new MongoClient(this.uri, { useUnifiedTopology: true });

    try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Insert document
      return await client.db(this.database).collection(collection).insertOne(value);
    } catch (e) {
      console.error(e);
      return false;
    } finally {
      await client.close();
    }
  }

  async findDocument(collection, filter) {
    const client = new MongoClient(this.uri, { useUnifiedTopology: true });

    try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Find document
      return await client.db(this.database).collection(collection).findOne(filter);
    } catch (e) {
      console.error(e);
      return false;
    } finally {
      await client.close();
    }
  }

  async findMultipleDocuments(collection, filter) {
    const client = new MongoClient(this.uri, { useUnifiedTopology: true });

    try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Find documents
      return await client.db(this.database).collection(collection).find(filter).toArray();
    } catch (e) {
      console.error(e);
      return false;
    } finally {
      await client.close();
    }
  }

  async updateDocument(collection, filter, set) {
    const client = new MongoClient(this.uri, { useUnifiedTopology: true });

    try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Update document
      return await client.db(this.database).collection(collection).updateOne(filter, { $set: set });
    } catch (e) {
      console.error(e);
      return false;
    } finally {
      await client.close();
    }
  }

  async updateMultipleDocuments(collection, filter, set) {
    const client = new MongoClient(this.uri, { useUnifiedTopology: true });

    try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Update document
      const updateField = { $set: set };
      return await client.db(this.database).collection(collection).updateMany(filter, updateField);
    } catch (e) {
      console.error(e);
      return false;
    } finally {
      await client.close();
    }
  }

  async deleteDocument(collection, filter) {
    const client = new MongoClient(this.uri, { useUnifiedTopology: true });

    try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Delete document
      return await client.db(this.database).collection(collection).deleteOne(filter);
    } catch (e) {
      console.error(e);
      return false;
    } finally {
      await client.close();
    }
  }

  async deleteMultipleDocuments(collection, filter) {
    const client = new MongoClient(this.uri, { useUnifiedTopology: true });

    try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Find document
      return await client.db(this.database).collection(collection).deleteMany(filter);
    } catch (e) {
      console.error(e);
      return false;
    } finally {
      await client.close();
    }
  }

  async aggregate(collection, pipeline) {
    const client = new MongoClient(this.uri, { useUnifiedTopology: true });

    try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Find document
      return await client.db(this.database).collection(collection).aggregate(pipeline).toArray();
    } catch (e) {
      console.error(e);
      return false;
    } finally {
      await client.close();
    }
  }
}

exports.bind = function bind(uri, database) {
  return new Crud(uri, database);
};
