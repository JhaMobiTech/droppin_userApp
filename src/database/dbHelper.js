import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = 'Droppin.db';
const database_version = '1.0';
const database_displayname = 'SQLite Droppin Database';
const database_size = 200000;
let db;

class DBHelper {

  openDB = () => {
    SQLite.echoTest()
      .then(() => {
        SQLite.openDatabase(
          database_name,
          database_version,
          database_displayname,
          database_size
        )
          .then((DB) => {
            db = DB;
            this.checkIfTableExistInDB(DB);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log('echoTest failed - plugin not functional' + error);
      });
  };

  checkIfTableExistInDB = (db) => {
    db.executeSql('SELECT 1 FROM drop_ship_order LIMIT 1')
      .then(() => {
        console.log('DB exist');
      })
      .catch((error) => {
        db.transaction(this.createDB).then(() => {
          console.log('Table created successfully');
        }).catch((error) => {
            console.log('Table not created successfully',error);
          });
      });
  };

  createDB = (tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS drop_ship_order( ' +
      '_id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      'customer_id INTEGER,'+
      'driver_id INTEGER,'+
      'pick_up_loc_lat_Ing DOUBLE,'+
      'drop_off_loc_lat_Ing DOUBLE,'+
      'pick_up_loc VARCHAR(50),'+
      'drop_off_loc VARCHAR(50),'+
      'item_id INTEGER,'+
      'item_pics BLOB,'+
      'price DOUBLE,'+
      'pick_up_time DEFAULT (datetime(\'now\',\'localtime\')),'+
      'pick_up_date DEFAULT (datetime(\'now\',\'localtime\')),'+
      'delivery_date DEFAULT (datetime(\'now\',\'localtime\')),'+
      'delivery_time DEFAULT (datetime(\'now\',\'localtime\')),'+
      'driver_note VARCHAR(50),'+
      'sender_name VARCHAR(50),'+
      'sender_phone INTEGER,'+
      'receiver_name VARCHAR(50),'+
      'receiver_phone INTEGER,'+
      'cash_paymen_method VARCHAR(50),'+
      'driver_name VARCHAR(50),'+
      'distance_travelled DOUBLE,'+
      'driver_phone INTEGER,'+
      'is_active BOOLEAN,'+
      'created_date DEFAULT (datetime(\'now\',\'localtime\')),'+
      'order_date DEFAULT (datetime(\'now\',\'localtime\')),'+
      'driver_rating DOUBLE ) ;'
    ).catch((error) => {
      this.errorCB(error);
    });
  };

  insertRowIndrop_ship_order = (orderDetail) => {
    console.log('db insert data- ', JSON.stringify(orderDetail));
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO drop_ship_order (customer_id,driver_id,pick_up_loc_lat_Ing,drop_off_loc_lat_Ing,pick_up_loc,drop_off_loc,item_id,item_pics,price ,pick_up_time,pick_up_date,delivery_date,delivery_time,driver_note,sender_name,sender_phone,receiver_name,receiver_phone,cash_paymen_method,driver_name,distance_travelled,driver_phone,is_active,created_date,order_date,driver_rating) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
            orderDetail.customer_id,
            orderDetail.driver_id,
            orderDetail.pick_up_loc_lat_Ing,
            orderDetail.drop_off_loc_lat_Ing,
            orderDetail.pick_up_loc,
            orderDetail.drop_off_loc,
            orderDetail.item_id,
            orderDetail.item_pics,
            orderDetail.price ,
            orderDetail.pick_up_time,
            orderDetail.pick_up_date,
            orderDetail.delivery_date,
            orderDetail.delivery_time,
            orderDetail.driver_note,
            orderDetail.sender_name,
            orderDetail.sender_phone,
            orderDetail.receiver_name,
            orderDetail.receiver_phone,
            orderDetail.cash_paymen_method,
            orderDetail.driver_name,
            orderDetail.distance_travelled,
            orderDetail.driver_phone,
            orderDetail.is_active,
            orderDetail.created_date,
            orderDetail.order_date,
            orderDetail.driver_rating
          
        ],
        (tx, results) => {
          console.log('db insert success: '+results);
          this.querydrop_ship_order;
        }
      ).catch((error) => {
        console.log('DB ERROR INSERT- ' + error);
      });
    });
  };

  updateRowInTransactions = (status, transaction_refId) => {
    console.log('db update data- ', status, transaction_refId);
    db.transaction(function (tx) {
      tx.executeSql(
        'UPDATE Transactions SET status=? WHERE transaction_refId=?', [status, transaction_refId],
        (tx, results) => {
          console.log('db update success');
          this.queryTransactions;
        }
      ).catch((error) => {
        console.log('DB ERROR UPDATE TRANSACTION- ' + error);
      });
    });
  };

  updateWorldPayResponseInTransactions = (worldpay_response, transaction_refId) => {
    worldpay_response = JSON.stringify(worldpay_response);
    console.log('db update worldpay data- ', worldpay_response, transaction_refId);
    db.transaction(function (tx) {
      tx.executeSql(
        'UPDATE Transactions SET worldpay_response=? WHERE transaction_refId=?', [worldpay_response, transaction_refId],
        (tx, results) => {
          console.log('db update success');
          this.queryTransactions;
        }
      ).catch((error) => {
        console.log('DB ERROR UPDATE WORLDPAY RESPONSE- ' + error);
      });
    });
  };

  deleteRowFromTransactions = (transaction_refId) => {
    console.log('db delete data- ', transaction_refId);

    db.transaction(function (tx) {
      tx.executeSql(
        'DELETE FROM Transactions WHERE transaction_refId=?', [transaction_refId],
        (tx, results) => {
          console.log('db delete success');
        }
      ).catch((error) => {
        console.log('DB ERROR DELETE- ' + error);
      });
    });
  };

  getTransactionByRefId(transaction_refId) {
    return new Promise((resolve, reject) => {
      db.executeSql('SELECT * FROM Transactions WHERE transaction_refId=?', [transaction_refId], (rs) => {
        console.log('getTransactionByRefId resultset - ', rs);
        resolve(rs.rows);
      }, reject);
    });
  }

  getAllOrderDetails() {
    return new Promise((resolve, reject) => {
      db.executeSql('SELECT * FROM drop_ship_order', [], (rs) => {
        resolve(rs.rows);
      }, reject);
    });

    // return (
    //   db.transaction(
    //     function (tx) {
    //       tx.executeSql('SELECT * FROM Transactions', [])
    //         .then(([tx, results]) => results);
    //     }
    //   )
    // );

  }


  querydrop_ship_order = () => {
    console.log('Executing drop_ship_order query result');
    db.transaction(function (tx) {
      tx.executeSql('SELECT * FROM drop_ship_order', [])
        .then(([tx, results]) => {
          // this.updateProgress("Query completed");
          var len = results.rows.length;
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            console.log(`drop_ship_order : `,row);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
}



// export { openDB, insertRowInTransactions, updateRowInTransactions, deleteRowFromTransactions, getAllPendingRecords, updateWorldPayResponseInTransactions };
const dbhelper = new DBHelper();
export default dbhelper;