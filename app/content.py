from datetime import datetime
from collections import namedtuple


def get_python_time():
    
    now = datetime.now()
    Day = namedtuple('Day','year month')
    pday = Day(2016,4)
    years = now.year - pday.year
    months = now.month - pday.month

    total_year = int((years*12 + months)/12)
    total_month = int((years*12 + months)%12)
    return total_year, total_month


csss = [['highlightGreen.css','green'],
        ['highlightPink.css','pink'],
        ['highlightOrange.css','orange']]

rand_name = ['Mamadou',
            'La Grenouille',
            'Mon Chelly',
            'Thomas',
            'Theary',
            'Sisi',
            'Juju de fruit']