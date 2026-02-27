interface RequestError {
    message: string;
    details?: Record<string, string[]>;
}

interface ActionResponse<T = null> {
    success: boolean;
    data?: T;
    error?: RequestError;
    status?: number;
}

type SuccessResponse<T = null> = ActionResponse<T> & { success: true };
type ErrorResponse = ActionResponse<never> & { success: false };
