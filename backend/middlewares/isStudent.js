const isStudent = (req, res, next) => {
    try {
        if (req.role !== "student") {
            return res.status(403).json({
                message: "Access denied. Students only.",
                success: false,
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error.",
            success: false,
        });
    }
};

export default isStudent;