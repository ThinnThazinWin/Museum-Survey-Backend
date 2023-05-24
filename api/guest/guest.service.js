const pool = require('../../config/database');

module.exports = {
    createGuest: (data, callback) => {
        pool.query(
            `INSERT INTO GuestInfo (name, phone_no, org_name, nrc, address, city, country, feedback, visited_date, visited_time)
            VALUES(?,?,?,?,?,?,?,?,?,?);`,
            [
                data.name,
                data.phone_no,
                data.org_name,
                data.nrc,
                data.address,
                data.city,
                data.country,
                data.feedback,
                data.visited_date,
                data.visited_time
            ],
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results);
            }
            )
    },
    getGuests: callback => {
        pool.query(
            `select * from GuestInfo;`,
            [

            ], 
            (error, results, fields) => {
                if (error){
                    return callback(error);
                }else{
                    console.log(results);
                    return callback(null, results);
                }
              
            }
        );
    }, 
    getGuestByGuestId: (id, callback) => {
        pool.query(
            `select * from GuestInfo where guest_id = ?;`,
            [
                id
            ], 
            (error, results, fields) => {
                if (error){
                    return callback(error);
                }else{
                    console.log(results[0]);
                    return callback(null, results[0]);
                }
               
            }
        );
    },
    updateGuest: (id, data, callback) => {
        pool.query(
            `UPDATE GuestInfo SET name=?, phone_no=?, org_name=?, nrc=?, address=?, city=?, country=?, feedback=?, visited_date=?, visited_time=? WHERE guest_id = ?`,
    
            [
                data.name,
                data.phone_no,
                data.org_name,
                data.nrc,
                data.address,
                data.city,
                data.country,
                data.feedback,
                data.visited_date,
                data.visited_time,
                id
            ], 
            (error, results, fields) => {
                if (error){
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    deleteGuest: (id, callback) => {
        console.log(id);
        pool.query(
            `delete from GuestInfo where guest_id =? ;`,
            [
                id 
            ], 
            (error, results, fields) => {
                if (error){
                    return callback(error);
                }else{
                    
                    return callback(null, results);
                }
               
            }
        );
    },
}