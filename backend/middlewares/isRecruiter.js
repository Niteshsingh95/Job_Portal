const isRecruiter = (req, res, next) => {
    try {
        // req.role should be set by isAuthenticated middleware
        if (req.role !== "recruiter") {
            return res.status(403).json({
                message: "Access denied. Recruiters only.",
                success: false,
            });
        }

        next();
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal server error.",
            success: false,
        });
    }
};

export default isRecruiter;