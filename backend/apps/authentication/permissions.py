from rest_framework.permissions import BasePermission

class isAdminPermission(BasePermission):
    """
    Global permission check for previleges admin only
    """

    def has_permission(self, request, view):
        if request.user.is_authenticated:
            current_user = request.user
            return current_user.is_admin
        else:
            return False