const {
    createGuest,
    getGuestByGuestId,
    getGuests,
    updateGuest,
    deleteGuest,
  } = require("./guest.service");
  
  module.exports = {
    createGuest: (req, res) => {
      const data = req.body;
      createGuest(data, (err, results) => {
        if (err) {
          return res.status(500).json({
            success: 0,
            message: "Database Connection Error",
          });
        }
        return res.status(200).json({
          success: 1,
          message: results,
        });
      });
    },
    getGuestByGuestId: (req, res) => {
      const id = req.params.guest_id;
      getGuestByGuestId(id, (err, results) => {
        if (err) {
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not found",
          });
      }
          return res.json({
            success: 1,
            data: results,
          });
        
      });
    },
    getGuests: (req, res) => {
      getGuests((err, results) => {
        if (err) {
          return;GET
        }
        return res.json({
          success: 1,
          data: results,
        });
      });
    },
    updateGuest: (req, res) => {
        const id = req.params.guest_id;
      const data = req.body;
      updateGuest(id, data, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Failed to update user",
          });
        }
        return res.json({
          success: 1,
          message: "Updated Successfully",
        });
      });
    },
    deleteGuest: (req, res) => {
      const data = req.body.guest_id;
      deleteGuest(data, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record Not Found",
          });
        }
        return res.json({
          success: 1,
          message: "Guest Deleted Successfully",
        });
      });
    },
  };
  